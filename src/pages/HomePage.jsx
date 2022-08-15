import { Component } from 'react'
import { userService } from '../services/userService'
import { bitcoinService } from '../services/bitcoinService'

export class HomePage extends Component {
  state = {
    user: userService.getUser(),
    bitcoinRate: 0,
  }

  async componentDidMount() {
    const bitcoinRate = await bitcoinService.getRate(this.state.user.coins)
    this.setState({ bitcoinRate })
  }

  render() {
    const { user, bitcoinRate } = this.state
    console.log('user', user)
    return (
      <section className="home">
        <h1>Hello {user.name}</h1>
        <h2>Coins: {user.coins}</h2>
        <h2>BTC: {bitcoinRate}</h2>
      </section>
    )
  }
}
