console.log("EZ Chat Rolls | Loaded");

Hooks.on("renderChatLog", (app, html, data) => {
    html.on("click", ".chat-control-icon .fa-dice-d20", () => {
        app.processMessage("/r d20")
    })
})

Hooks.on("preCreateChatMessage", (document, data, options, userId) => {
    // console.log(document, data, options, userId);
    if (document.rolls.length) return true;
    if (document.content.startsWith("/")) return true;

    try {
        const r = new Roll(document.content);
        r.evaluateSync({strict: false});
        new Roll(document.content).toMessage();
        return false;
    }
    catch(e) {
        return true;
    }
})
