import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then((res) => {
        if( res === 0) {
            console.log('Data sending in progress');
            
            userRepository.create({
                name: 'Head Trainer',
                role: 'head-trainer',
                email: 'head.trainee@succesive.tech',
                password: 'HelloWorld456'
            });
            userRepository.create({
                name: 'Trainee',
                role: 'trainee',
                email: 'trainee@successive.tech',
                password: 'HelloWorld123'
            });
        }
    })
    .catch((err) => console.log(err))
}


