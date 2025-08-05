// This component is used to retrieve information from the user table in the database.
// is supposed to be in js, but im havin problem with the auto correct

import { supabase } from "../lib/supabase"

export const getUserData = async(userId) => {
    try {
        //  calling the supabase API to fetch the data from users table
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('id', userId)
            .single()

        if (error) {
            //   throw new Error(error?.message)
            return { success: false, msg: error?.message }
        }

        return { success: true, data }

    } catch (error) {
        console.log('got error fetching from the db:', error)
        return { success: false, msg: error?.message }
    }
}

export const updateUserData = async(userId, data) => {
    try {
        //  calling the supabase API to fetch the data from users table
        const { error } = await supabase
            .from('users')
            .update(data)
            .eq('id', userId)
        if (error) {
            //   throw new Error(error?.message)
            return { success: false, msg: error?.message }
        }

        return { success: true, data }

    } catch (error) {
        console.log('got error fetching from the db:', error)
        return { success: false, msg: error?.message }
    }
}