'use server'

import { auth, createClerkClient } from '@clerk/nextjs/server'

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = await auth()

  if (!userId) {
    return { error: 'No signed-in user' }
  }

  try {
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        // Default role for self-signups if not already set
        role: formData.get('role') || 'expert',
      },
    })
    return { success: true }
  } catch (err) {
    return { error: 'There was an error updating your profile.' }
  }
}
