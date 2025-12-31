// Bad FP (Fat Dependency)
type Services = {
  saveToDb: () => void
  sendEmail: () => void
  log: () => void
}

const registerUserB = (services: Services) => {
  services.saveToDb()
}


// Good FP (Segregated Dependencies)
type UserRepo = {
  save: () => void
}

const registerUser = (repo: UserRepo) => {
  repo.save()
}

// Another function:
type Mailer = {
  send: () => void
}

const notifyUser = (mailer: Mailer) => {
  mailer.send()
}

