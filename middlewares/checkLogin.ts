// import { Context } from "@nuxt/types"
import controllers from "~/controllers"

export default async function() {
  await controllers.checkLogin();
}
