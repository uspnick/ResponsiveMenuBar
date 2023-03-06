$.fn.hasScroll = function ()
{
    if (this.length > 0)
        return this[0].scrollWidth > this[0].clientWidth;
    return true;
};

function idleCallbackFunction(idleCallbackFunction)
{
    if (typeof idleCallbackFunction === 'function')
        if ('requestidleCallbackFunction' in window)
            window.requestidleCallbackFunction(idleCallbackFunction, { timeout: 10 });
        else
            setTimeout(idleCallbackFunction, 10, idleCallbackFunction);
};

var copyCount = 0;
$.fn.mirrorCopy = function ()
{
    if (this.length > 0)
    {
        let id = this.attr('id');
        if (!id)
            this.attr('id', id = "orig_" + copyCount++);

        let hiddenMenuHTML = "<div class='hiddenMenuLinkContainer' menuContainerWidth='" + parseInt(this.outerWidth(true)) + "' id='mirror_" + id + "' >" + this[0].innerHTML + "</div>";
        this.addClass('displayNone');
        return $(hiddenMenuHTML);
    }

    return this;
};

$.fn.reactiveOrig = function ()
{
    if (this.length > 0)
    {
        let id = this.attr('id');
        this.detach().remove();
        return $('#' + id.replace('mirror_', '')).removeClass('displayNone');
    }

    return this;
};

function updateHiddenMenuLinkContainer()
{
    var menuContainer = $('.menuContainer');
    var menuContainerWidth = menuContainer.width();
    var menuContainerLinks = menuContainer.children('div').not('.hiddenMenuLinkContainer').not('.displayNone');
    var totalWidth = 0;
    var exileMenuContainer = $('.exileMenuContainer');
    var hiddenMenuLinks = $('.hiddenMenuLinkContainer').not('.displayNone');


    if (hiddenMenuLinks.length === 0)
        $('.iconExileMenu').addClass('displayNone');
    else
        $('.iconExileMenu').removeClass('displayNone');


    if (menuContainerLinks.length > 1)
    {
        if (menuContainer.hasScroll())
        {
            let lastVisibleMenuLink = menuContainerLinks.not(".active");
            lastVisibleMenuLink = lastVisibleMenuLink.eq(lastVisibleMenuLink.length - 1);
            exileMenuContainer.prepend(lastVisibleMenuLink.mirrorCopy());
            idleCallbackFunction(updateHiddenMenuLinkContainer);
            return;
        }
    }

    if (menuContainer.hasClass("opacity0"))
        menuContainer.removeClass("opacity0");

    if (menuContainer.hasScroll())
        return;

    if (hiddenMenuLinks.length > 0)
    {
        menuContainerLinks.each(function ()
        {
            totalWidth += $(this).outerWidth(true);
        });

        let nextHiddenMenuLink = hiddenMenuLinks.eq(0);
        totalWidth += parseInt(nextHiddenMenuLink.attr('menuContainerWidth'));

        if (totalWidth + 50 < menuContainerWidth)
        {
            nextHiddenMenuLink.reactiveOrig();
            idleCallbackFunction(updateHiddenMenuLinkContainer);
            return;
        }
    }
}


$(document).ready(function ()
{
    // Show the blue line under the first menuContainer item when the page loads
    var activeMenuLine = $('.blue-line');
    var firstLink = $('.menuLink:first-child');
    var linkRect = firstLink[0].getBoundingClientRect();
    var linkPadding = parseInt(firstLink.css('padding-left')) + parseInt(firstLink.css('padding-right'));
    activeMenuLine.css('width', (linkRect.width - linkPadding) + 'px');
    activeMenuLine.css('transform', 'translateX(' + (linkRect.left) + 'px)');

    // Set the height of the iframe to fill the remaining space
    var iframeElement = $('#id_iframeElement');
    var menuContainerHeight = $('.menuContainer').height();
    iframeElement.css('height', 'calc(100% - ' + menuContainerHeight + 'px)');


    // Handle click events on menuContainer items
    $(document).on('click update', '.menuLink', function (e)
    {
        let clickedMenuLink = $(this);
        if (clickedMenuLink.hasClass('hiddenMenuLinkContainer'))
            return;

        var iframeElement = $('#id_iframeElement');
        var iframeElementSrc = $(this).attr('urlto');

        if (e && e.type === 'click')
        {
            e.preventDefault();
            $('.menuLink.active').removeClass('active');
        }

        clickedMenuLink.addClass('active');
        iframeElement.addClass('greyOut');
        iframeElement.attr('src', iframeElementSrc);
    });

    $('#id_iframeElement').on('load', function ()
    {
        $(this).removeClass('greyOut');

        var iframeElement = document.getElementById('id_iframeElement');
        iframeElement.contentDocument.body.addEventListener('click', function (e)
        {
            // Send a message to the parent window the iframeElementclick event
            window.parent.postMessage({
                type: 'iframeElementclick'
            }, '*');
        });
    });


    $(window).on('resize', function ()
    {
        updateHiddenMenuLinkContainer();
    });

    var iconExileMenu = $('.iconExileMenu');
    updateHiddenMenuLinkContainer();


    var whenvisibleHiddenMenuOpens = 0;
    iconExileMenu.on('click', function ()
    {
        whenvisibleHiddenMenuOpens = Date.now();
        $('.exileMenuContainer').toggleClass('displayNone');
    });

    window.addEventListener('message', function (e)
    {
        // Check if the message is coming from the iframeElement
        if (e.source !== document.getElementById('id_iframeElement').contentWindow && e.source !== window)
        {
            return;
        }

        // Check the message type
        if (e.data.type === 'iframeElementclick')
        {
            $('.exileMenuContainer:visible').addClass('displayNone');
        }
    });

    $(document).on('click', function (e)
    {
        if (whenvisibleHiddenMenuOpens + 1000 > Date.now())
            return;

        var visibleHiddenMenu = $('.exileMenuContainer:visible');
        if (visibleHiddenMenu && visibleHiddenMenu.length > 0 && $(e.target).closest('.exileMenuContainer').length === 0)
        {
            $('.exileMenuContainer').toggleClass('displayNone');
        }
    });

    $('#id_iframeElement').on('click', function (e)
    {
        var visibleHiddenMenu = parent.$('.exileMenuContainer:visible');
        if (visibleHiddenMenu && visibleHiddenMenu.length > 0 && $(e.target).closest('.exileMenuContainer').length === 0)
        {
            parent.$('.exileMenuContainer').toggleClass('displayNone');
        }
    });

    $(document).on('click', '.hiddenMenuLinkContainer', function (e)
    {
        e.preventDefault();

        $('.menuLink.active').removeClass('active');

        var orig = $(this).reactiveOrig();
        orig.addClass('active');

        $('.exileMenuContainer').addClass('displayNone');

        $(window).trigger('resize');
        $('.menuLink.active').trigger('update');
    });

    // Load the first page in the iframeElement
    firstLink.trigger("update");

});


