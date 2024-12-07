import { Client, Account, Avatars, Databases, ID, Query } from 'react-native-appwrite';

export const config  = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.rn.ai-videouploading-app",
    projectID: "6751336b00350cb1c90b",
    databaseID: "675136430039b7e2c95f",
    usersCollectionID: "675136a9003b953bdb7e",
    videosCollectionID: "67513701003dabcd71e1",
    storageID: "67513974001040a9ad59"
}

const client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectID)
    .setPlatform(config.platform);

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client)

export const createUser = async (email, password, username) => {
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
                username,
                avatar: avatarURL
            }
        )
        return newUser

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw Error

        const currentUser = await database.listDocuments(
            config.databaseID,
            config.usersCollectionID,
            [Query.equal("accountId", currentAccount.$id)]
        )

        if (!currentUser) throw Error
        return currentUser.documents[0]

    } catch (error) {
        console.log(error);
        throw new Error(error);

    }
}
