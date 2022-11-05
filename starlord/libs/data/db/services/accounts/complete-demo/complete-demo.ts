import { UserModel } from '../../../models/user/user-model';

export async function completeDemo(userId: string): Promise<void> {
  // Create new package
  const userModel = new UserModel();
  const updatedUser = await userModel.updateUser(userId, {
    onboarding: {
      demoCompleted: true,
    },
  });
  console.log('Updated User: ', updatedUser.user);
}
