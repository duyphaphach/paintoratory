import axios from 'axios'
import humps from 'humps'

export interface UserData {
  'id'?: number | string
  'name'?: string | undefined
  'email'?: string | undefined
  'avatar'?: string | undefined
  'role'?: string | undefined
  'roleName'?: string | undefined
}

export const userRetrieve = async ({ sessionId }: { sessionId: string }): Promise<UserData> => {
  let data = {}
  try {
    const response = await axios.get('/users/me', {
      headers: {
        odoo_session_id: sessionId
      }
    })
    data = humps.camelizeKeys(response?.data ?? {})
  } catch (e) {}
  return data
}
