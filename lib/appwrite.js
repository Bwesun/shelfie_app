import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('6a14f705001c123b2f31')
  .setPlatform('com.censono.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const database = new Databases(client)