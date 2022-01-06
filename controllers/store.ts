import { ssrRef } from "@nuxtjs/composition-api"

const store = ssrRef<{
  fisrt_route: string | null
  user: {
    uid: string | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    bio: string | null
    state: string | null
    role: string | null
  }
}>({
  fisrt_route: null,
  user: {
    uid: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    bio: null,
    state: null,
    role: null
  }
})

export default store
