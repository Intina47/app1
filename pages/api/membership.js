import { validationResult } from 'express-validator';
import { connectToDatabase } from '../../utils/database';
import { createHandler } from '../../utils/handler';

const handler = createHandler();

handler.post(async (req, res) => {
    try {
        const {firstName,lastName, email,comfirmemail,dob,isStudent,graduationYear} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
          }
        if (!firstName || !lastName || !email || !comfirmemail || !dob || !isStudent){
            return res.status(400).json({error: 'Please fill all the fields'});
        }
        if (isStudent === 'yes' && !graduationYear){
            return res.status(400).json({error: 'graduation-year'});
        }
        //check for valid emails
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
           return res.status(400).json({ error: 'Invalid email format' });
         }
        //check for emails match
        if (email !== comfirmemail){
            return res.status(400).json({error: 'Emails-no-match'});
        }
        // Convert dob string to Date object
        const dobDate = new Date(dob);
        // const formattedDate = dobDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        // console.log(formattedDate); // Output: July 1, 2000
        const {db} = await connectToDatabase();
        //check for existing user with same email address in database
        const existingUser = await db.collection('members').findOne({email});
        if (existingUser) {
            // Handle updates and changes to graduation year
            if (existingUser.isStudent === 'no' && isStudent === 'yes') {
                await db.collection('members').updateOne({ email }, { $set: { isStudent, graduationYear } });
                return res.status(200).json({ message: 'Membership updated successfully' });
            }

            return res.status(200).json({ message: 'Member already exists' });
        }
        const collection = db.collection('members');
        //create new member document and insert into members collection
        const member = {
            firstName,
            lastName,
            email,
            dob: dobDate,
            isStudent,
            graduationYear,
            timestamp: new Date(),
        };
        await collection.insertOne(member);
        console.log(`New Member Added ${JSON.stringify(member)}`);
        return res.status(200).json({message: 'Member added successfully'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
        // if (error instanceof CustomApplicationError) {
        //     return res.status(400).json({error: error.message}); //handle application specific errors
        // }
    }
});
export default handler;
