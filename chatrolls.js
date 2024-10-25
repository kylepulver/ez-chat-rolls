console.log("EZ Chat Rolls | Loaded");

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
        // console.log(e)
        return true;
    }
})
