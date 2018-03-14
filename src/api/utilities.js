export const createBodyPatch = (type, id, changedAttributes) => ({
    data: {
        type: type,
        id: id,
        attributes: {
            ...changedAttributes
        }
    }
});
