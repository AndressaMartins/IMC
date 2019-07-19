import { AsyncStorage } from 'react-native';

export const initializeDb = async () => {
    await AsyncStorage.getItem('news') || await AsyncStorage.setItem('news', JSON.stringify([
        { id: 1, date: '01-07-2019', title: 'Tarefa ', text: 'Medico as 14:00' },
        { id: 2, date: '03-07-2019', title: 'Tarefa', text: 'Aula nesse final de semana' },
        { id: 3, date: '06-07-2019', title: "Tarefa", text: 'Entrega do trabalho' }
    ]))

    await AsyncStorage.getItem('users') || await AsyncStorage.setItem('users', JSON.stringify([
        { id: 1, email: 'andressa@user.com', password: '103020', name: 'Sample User' }
    ]))
}

export const login = async (email, password) => {
    const users = await AsyncStorage.getItem('users')
    const jsonUsers = JSON.parse(users)

    for (let i = 0; i < jsonUsers.length; i++) {
        if (jsonUsers[i].email == email && jsonUsers[i].password == password) {
            return jsonUsers[i]
        }
    }

    return -1
}

export const getNews = async () => {
    const news = await AsyncStorage.getItem('news')
    return news
}