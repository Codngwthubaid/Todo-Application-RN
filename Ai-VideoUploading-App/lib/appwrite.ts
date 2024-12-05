import { Client, Account, Avatars, Databases, ID } from 'react-native-appwrite';

interface Config {
    endpoint: string;
    platform: string;
    projectID: string;
    databaseID: string;
    usersCollectionID: string;
    videosCollectionID: string;
    storageID: string; // Note: corrected "stroageID" to "storageID"
}


export const config: Config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.rn.ai-videouploading-app",
    projectID: "6751336b00350cb1c90b",
    databaseID: "675136430039b7e2c95f",
    usersCollectionID: "675136a9003b953bdb7e",
    videosCollectionID: "67513701003dabcd71e1",
    storageID: "67513974001040a9ad59"
}

let client: Client;
let account: Account;
let avatar: Avatars;
let database: Databases;

client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectID)
    .setPlatform(config.platform);

account = new Account(client);
avatar = new Avatars(client);
database = new Databases(client)

export const createUser = async (email: string, password: string, username: string) => {
    try {
        const ID = { unique: () => `${Date.now()}` };
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error

        const avatarURL = avatar.getInitials(username)
        await signIn(email, password)

        const newUser = await database.createDocument(
            config.databaseID,
            config.usersCollectionID,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                password,
                username,
                avatar:avatarURL
            }
        )
        return newUser

    } catch (error) {
        console.log(error);
        throw Error
    }
}


export async function signIn(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        console.log(error);
        throw Error

    }
}