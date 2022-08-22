(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = new CustomEvent(event, { bubbles, cancelable, detail });
        // var evt = document.createEvent("CustomEvent");
        // evt.initCustomEvent(
        //     event,
        //     params.bubbles,
        //     params.cancelable,
        //     params.detail
        // );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();
