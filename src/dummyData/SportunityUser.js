// This mocked user data is returned after login request.

const user = {
  id: 123,
  firstName: 'myFirstName',
  lastName: 'myLastName',
  pseudo: 'myPseudo',
  email: 'my@email.com',
  phonePrefix: '+123',
  phoneNumber: '123456',
  age: 'myAge',
  sex: 'mySex',
  address: 'myAddress',
  sports: [],
  feedbacks: [],
  messages: [],
  circles: []
};

/**
 * Mocked login network request
 */
class UserApi {
  /**
   * ...
   */
  static authUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, user));
      }, 1500);
    });
  }
}

export default UserApi;
