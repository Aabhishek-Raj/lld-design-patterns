// Bad FP Example
const registerUserB = (user: any) => {
  // validate
  // save to DB
  // send email
  // log
}

// srp, but not enough
const validateS = () => {}
const saveToDbS = () => {}
const sendEmailS = () => {}
const loggingS = () => {}

const registerUserS = () => {
  validateS()
  saveToDbS()
  sendEmailS()
  loggingS()
}

// SRP + scalability + testability + replaceability.
type User = {
  name: string,
  email: string
}

const validateUser = (user: User): User => user

const saveUser = (repo: UserRepo) => (user: User): User => {
  repo.save(user)
  return user
}
const sendWelcome = (mailer: Mailer) => (user: User): User => {
    mailer.send(user.email)
    return user
  }
// function sendEmail(mailer) {
//   return function (user) {
//     return mailer.mail(user)
//   }
// }
const logRegistration = (logger: Logger) => (user: User): User => {
    logger.log("User registered")
    return user
  }

//wrong
// const registerUser = (user, dbRepo, mailer) => {
//     validate(user)
//     saveToDb(dbRepo)(user)
//     sendEmails(mailer)(user)
// }

const registerUser =
(repo: UserRepo, mailer: Mailer, logger: Logger) =>
  (user: User) => {
    validateUser(user)
    saveUser(repo)(user)
    sendWelcome(mailer)(user)
    logRegistration(logger)(user)
  }

const fakeRepo = { save: jest.fn() }
const fakeMailer = { send: jest.fn() }
const fakeLogger = { log: jest.fn() }

const register = registerUser(fakeRepo, fakeMailer, fakeLogger)
register(fakeUser)

expect(fakeRepo.save).toHaveBeenCalled()