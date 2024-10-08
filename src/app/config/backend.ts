import SuperTokens from "supertokens-node";
import EmailPasswordNode from "supertokens-node/recipe/emailpassword";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  return {
    framework: "custom",
    supertokens: {
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: "https://try.supertokens.com",
      // apiKey: <API_KEY(if configured)>,
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init({
        override: {
          functions: (originalImplementation) => {
            return {
              ...originalImplementation,

              // override the email password sign up function
              signUp: async function (input) {
                // TODO: some pre sign up logic

                const response = await originalImplementation.signUp(input);

                if (
                  response.status === "OK" &&
                  response.user.loginMethods.length === 1 &&
                  input.session === undefined
                ) {
                  // try {
                  //   console.log(response);
                  //   await User.create({ super_id: response.user.id });
                  // } catch (error) {
                  //   console.log(error);
                  // }
                }
                return response;
              },

              // override the email password sign in function
              signIn: async function (input) {
                // TODO: some pre sign in logic

                let response = await originalImplementation.signIn(input);

                if (response.status === "OK" && input.session === undefined) {
                  // TODO: some post sign in logic
                }

                return response;
              },
            };
          },
        },
      }),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  };
};

let initialized = false;
// This function is used in your APIs to make sure SuperTokens is initialised
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig());
    initialized = true;
  }
}
