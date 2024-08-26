class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  addUser(id, username, email, firstName, lastName, phoneNumber, address) {
    return this.userModel.create({
      id,
      username,
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
    });
  }

  getAllUsers() {
    return this.userModel.find();
  }

  getUserById(uuid) {
    return this.userModel.findOne({ uuid });
  }

  updateUserById(uuid, name, age, mobile, address) {
    return this.userModel.findOneAndUpdate({ uuid }, {
      $set: { name, age, mobile, address }
    }, { new: true });
  }

  deleteUserById(uuid) {
    return this.userModel.findOneAndDelete({ uuid });
  }
}

module.exports = {
  UserRepository,
};
