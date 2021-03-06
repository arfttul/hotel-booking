import React, { Component } from 'react'
import { RoomContext } from '../Context/Context'
import Loading from './Loading'
import Room from './Room'
import Title from '../Components/Title'
class FeaturedRooms extends Component {
  static contextType = RoomContext

  render() {
    let { loading, featuredRooms: rooms } = this.context

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} text='featuredRooms' />
    })

    return (
      <section className='featured-rooms'>
        <Title title='Featured-rooms' />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}

export default FeaturedRooms
