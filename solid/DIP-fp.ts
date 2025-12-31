
// Business logic secretly depends on MySQL
type User = {
    name: string
}
const saveUserB = (user: User) => {
  mysql.save(user)
}


// DIP in FP (Dependency as argument)
type UserRepo = {
  save: (user: User) => void
}


const saveUser = (repo: UserRepo) => (user: User) => {
    repo.save(user)
}


const registerUser = (repo: UserRepo)  => (user: User) => {
    saveUser(repo)(user)
}

// Testability 
const fakeRepo = { save: jest.fn() }

const register = registerUser(fakeRepo)

register(fakeUser)

expect(fakeRepo.save).toHaveBeenCalled()
