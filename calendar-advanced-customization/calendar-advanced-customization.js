<script>
// Waits for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Adds a click event listener to the body element
    document.body.addEventListener('click', function (event) {
        var target = event.target;

        // Checks if the clicked element is inside a specific calendar event element
        var isChildOfHasEvents = target.closest('.event-container > .calendar-day-wrap');

        if (isChildOfHasEvents) {
            var elementsWithDataPostId = isChildOfHasEvents.querySelectorAll('[data-post-id]');

            // Retrieves the values of data-post-id attributes
            var dataPostIdValues = Array.from(elementsWithDataPostId).map(function (element) {
                return element.getAttribute('data-post-id');
            });

            console.log('Captured IDs:', dataPostIdValues);

            // Finds the closest calendar wrapper
            var parentCalendar = target.closest('.first-calendar, .second-calendar');
            if (parentCalendar) {
                var popupToDisplay = parentCalendar.classList.contains('first-calendar') ? '.popup-manual-event' : '.popup-manual-event-alt';
                var popupManualEvent = document.querySelector(popupToDisplay);
                
                // Displays the appropriate popup
                if (popupManualEvent) {
                    popupManualEvent.style.display = 'flex';

                    var popupContent = popupManualEvent.querySelector('.popup-content');
                    if (popupContent) {
                        popupContent.innerHTML = ''; // Clears existing content

                        dataPostIdValues.forEach(function (id) {
                            console.log(`Fetching data for post ID: ${id}`);
                            fetchDataFromApi(id, popupContent);
                        });
                    } else {
                        console.error('Element .popup-content not found inside the popup.');
                    }
                }
            }
        }
    });

    // Fetches data from an external API based on the post ID
    function fetchDataFromApi(postId, popupContent) {
        var apiUrl = `https://example.com/api/events/${postId}`;
        console.log(`Requesting URL: ${apiUrl}`);

        fetch(apiUrl)
            .then(function (response) {
                if (!response.ok) {
                    console.error(`API request error: ${response.status}`);
                    throw new Error('Error in API request');
                }
                return response.json();
            })
            .then(function (data) {
                console.log('Data received from API:', data);
                var htmlContent = createHtmlContentFromApiData(data);
                popupContent.appendChild(htmlContent);
            })
            .catch(function (error) {
                console.error('Error fetching API data:', error);
            });
    }

    // Converts timestamp or date string to a readable date/time format
    function formatDate(dateString) {
        if (typeof dateString === 'number') {
            // Converts timestamp to date
            var date = new Date(dateString * 1000); // Multiplies by 1000 if it's in seconds
            return date.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
        }
        if (typeof dateString === 'string') {
            // Splits the date-time string into components
            var parts = dateString.split('T');
            var datePart = parts[0].split('-').reverse().join('/');
            var timePart = parts[1].substring(0, 5);
            return `${datePart} ${timePart}`;
        }
        return 'Unavailable';
    }

    // Creates HTML content based on the API data
    function createHtmlContentFromApiData(data) {
        var div = document.createElement('div');
        div.classList.add('event-item');

        // Checks if 'meta' exists in the response object
        if (!data.meta) {
            console.error('Meta not found in the response object:', data);
        }

        var processNumber = data.meta?.process_number || 'Unavailable';
        var startDate = data.meta?.start_date ? formatDate(data.meta.start_date) : 'Unavailable';
        var endDate = data.meta?.end_date ? formatDate(data.meta.end_date) : 'Unavailable';
        var type = data.meta?.type || 'Unavailable';
        var category = data.meta?.category || 'Unavailable';
        var judgingBody = data.meta?.judging_body || 'Unavailable';
        var judge = data.meta?.judge || 'Unavailable';
        var reporter = data.meta?.reporter || 'Unavailable';
        var linkUrl = data.meta?.link_url || 'Unavailable';

        div.innerHTML = `
            <div class="popup-border">
                <h5>Process: ${processNumber}</h5>
                <p><strong>Start Date/Time:</strong> ${startDate}</p>
                <p><strong>End Date/Time:</strong> ${endDate}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Judging Body:</strong> ${judgingBody}</p>
                <p><strong>Judge:</strong> ${judge}</p>
                <p><strong>Reporter:</strong> ${reporter}</p>
                <p><strong>Link:</strong> <a href="${linkUrl}" target="_blank">${linkUrl}</a></p>
            </div>
        `;

        return div;
    }

    // Adds event listeners for closing the popup and clearing its content
    var closeBtn = document.getElementById('close-event');
    var closeBtnAlt = document.getElementById('close-event-alt');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var popupManualEvent = document.querySelector('.popup-manual-event');
            if (popupManualEvent) {
                popupManualEvent.style.display = 'none';

                var popupContent = popupManualEvent.querySelector('.popup-content');
                if (popupContent) {
                    popupContent.innerHTML = '';  // Clears the inserted data
                }
            }
        });
    }

    if (closeBtnAlt) {
        closeBtnAlt.addEventListener('click', function () {
            var popupManualEventAlt = document.querySelector('.popup-manual-event-alt');
            if (popupManualEventAlt) {
                popupManualEventAlt.style.display = 'none';

                var popupContentAlt = popupManualEventAlt.querySelector('.popup-content');
                if (popupContentAlt) {
                    popupContentAlt.innerHTML = '';  // Clears the inserted data
                }
            }
        });
    }
});
</script>
