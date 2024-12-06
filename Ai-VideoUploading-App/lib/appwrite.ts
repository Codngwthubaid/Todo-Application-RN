import { Client, Account, Avatars, Databases, ID } from 'react-native-appwrite';

interface Config {
    endpoint: string;
    platform: string;
    projectID: string;
    databaseID: string;
    usersCollectionID: string;
    videosCollectionID: string;
    storageID: string; 
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
        const userId = ID.unique()
        const newAccount = await account.create(
            userId,
            email,
            password,
            username
        )

        if (!newAccount) throw new Error("Failed to create account ...")

        const avatarURL = avatar.getInitials(username)
        await signIn(email, password)
        const newUser = await database.createDocument(
            config.databaseID,
            config.usersCollectionID,
            userId,
            {
                accountId: newAccount.$id,
                email,
                password,
                username,
                avatar: avatarURL
            }
        )
        return newUser

    } catch (error: any) {
        console.log(error);
        throw new Error(error)
    }
}


export async function signIn(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error: any) {
        console.log(error);
        throw new Error(error)
    }
}
