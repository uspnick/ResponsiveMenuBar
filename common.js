$(document).ready(function ()
{
        window.addEventListener('click', function (e)
        {
            // Send a message to the parent window with the details of the click event
            window.parent.postMessage({
                type: 'iframeclick'
            }, '*');
        });
});

