import { 
    addNewContact,
    getContacts, 
    getContactWithID, 
    updateContact, 
    deleteContact
 } from "../controllers/crmController";

const routes = (app) => {

    app.route('/contact')

    //get all contacts
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getContacts)

    //Post a new contact
    .post(addNewContact);

    app.route('/contact/:contactId')

    // Get specific contact
    .get(getContactWithID)

    // Update a contact
    .put(updateContact)

    // Delete a contact
    .delete(deleteContact)
}


export default routes;