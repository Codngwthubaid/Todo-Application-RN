import { Client, Account } from 'react-native-appwrite';

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

client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectID)
    .setPlatform(config.platform);

account = new Account(client);

export const createUser = () => {
    const ID = { unique: () => `${Date.now()}` };
    account.create(ID.unique(), "me@example.com", "password", "Jane Doe")
        .then(function (response: any) {
            console.log(response);
        }, function (error) {
            console.log(error);
        })
}