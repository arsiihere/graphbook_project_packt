const typeDefinations = `
type Post {
    id : Int
    text : String
    user: User
}
type RootQuery {
    posts:[Post]
    chats: [Chat]
}
type Message {
    id: Int
    text: String
    chat: Chat
    user: User
}
   type Chat {
    id: Int
    messages: [Message]
    users: [User]
   }
schema {
    query: RootQuery
}

type User {
    avatar: String
    username: String

}
input PostInput {
    text: String!
}

input UserInput {
  username: String!
  avatar: String!
}
input ChatInput{
    users:[Int]
}

input MessageInput{
    text: String!
    chatId: Int!
}
type Mutation {
  addPost (post: PostInput!): Post
  addChat (chat : ChatInput!): Chat
  addMessage(message: MessageInput!): Message
}

`;

export default [typeDefinations];
