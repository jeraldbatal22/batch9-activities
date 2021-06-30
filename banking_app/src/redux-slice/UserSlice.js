import { createSlice } from '@reduxjs/toolkit'
import profileImage from '../images/profile.jpg'

import moment from 'moment'

const UserSlice = createSlice({
  name: 'user',
  initialState: [
      {
        id: 3659874521301,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'Jerald',
        lastname: 'Batal',
        username: 'admin',
        password: '1234',
        balance: 1000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 1,
      },
      {
        id: 2341278597623,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'Jerald',
        lastname: 'Batal',
        username: 'jerald',
        password: '1234',
        balance: 1000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 4892357189263,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'Jade',
        lastname: 'Batal',
        username: 'jaro',
        password: '1234',
        balance: 0,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 56897462135241,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'Victor',
        lastname: 'batal',
        username: 'victor',
        password: '1234',
        balance: 2000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 9856358942103,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'marife',
        lastname: 'batal',
        username: 'marife',
        password: '1234',
        balance: 6000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 2351097354679,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'jairus',
        lastname: 'warren',
        username: 'red',
        password: '1234',
        balance: 3000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 1879563258461,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'ricky',
        lastname: 'demegillo',
        username: 'king',
        password: '1234',
        balance: 4000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
      {
        id: 6983569874215,
        date: moment().format('MMMM Do YYYY'),
        firstname: 'peterson',
        lastname: 'sagario',
        username: 'peter',
        password: '1234',
        balance: 2000,
        history: [],
        expenses: [],
        usersDeposit: [],
        profileImage:profileImage,
        role: 2,
      },
  ],
  reducers: {
    registerNewUser: (state, {payload}) => {
      const newUser = payload.newUser
      state.push(newUser)
    },
    updateNewBalance: (state, { payload }) => {
      const action = payload.action
      const index = state.findIndex((user) => user.id === payload.userId)
      if(action === 'deposit') {
        state[index].balance += parseFloat(payload.amount)
      }
      if(action === 'withdrawal') {
        state[index].balance -= parseFloat(payload.amount)
      }
      if(action === 'sendMoney') {
        state[index].balance -= parseFloat(payload.amount)
        const index2 = state.findIndex((user) => user.id === payload.sendAmount.id)
        state[index2].balance += parseFloat(payload.amount)
      }
      if(action === 'expense') {
        state[index].balance -= parseFloat(payload.amount)
      }
      if(action === 'updateExpenseBalance') {
        state[index].balance += payload.currentAmount
        state[index].balance -= parseFloat(payload.editExpense.amount)
      }
    },
    saveToHistory: (state, {payload}) => {
      const action = payload.action
      if(action === 'deposit' || action === 'withdrawal' || action === 'sendMoney') {
        const index = state.findIndex((user) => user.id === payload.userId)
        state[index].history.push(payload)
      }
      if(action === 'recievedMoney') {
        const index = state.findIndex((user) => user.id === payload.receiver.id)
        state[index].history.push(payload)
      }
     
    },

    saveToExpenses: (state, {payload}) => {
      const action = payload.action
      if(action === 'expense') {
        const index = state.findIndex((user) => user.id ===  payload.userId)
        state[index].expenses.push(payload)
      }
      if(action === 'deleteExpense') {
        const index = state.findIndex((user) => user.id ===  payload.userId)
        state[index].expenses.splice(payload.index, 1)
      }
      if(action === 'updateExpense') {
        const index = state.findIndex((user) => user.id === payload.userId)
        const index2 = state[index].expenses.findIndex(expense => expense.id === payload.editExpense.id)
        state[index].expenses[index2].title = payload.editExpense.title
        state[index].expenses[index2].amount = parseFloat(payload.editExpense.amount)
      }
    },

    updateProfilePicture:(state, {payload}) => {
      const index = state.findIndex((user) => user.id === payload.authId)
      state[index].profileImage = payload.uploadImage
      // console.log(payload.uploadImage)
    },
    updateProfileInfo:(state, {payload}) => {
      const action = payload.action
      if(action === 'editProfileInfo') {
        const index = state.findIndex((user) => user.id === payload.authId)
        state[index].firstname = payload.editProfileInfo.firstname
        state[index].lastname = payload.editProfileInfo.lastname
        state[index].username = payload.editProfileInfo.username
      }
      if(action === 'newPassword') {
        const index = state.findIndex((user) => user.id === payload.user)
        state[index].password = payload.newPassword
      }
    },
  },
})

export const { updateNewBalance, registerNewUser, saveToHistory, saveToExpenses, updateProfilePicture, updateProfileInfo } = UserSlice.actions
export default UserSlice.reducer
