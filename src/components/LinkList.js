import React, { Component } from 'react'
import Link from './Link'

class LinkList extends Component {
  render() {
    const links = [
      {
        id: 1,
        description: "description1",
        url: "url1",
      },
      {
        id: 2,
        description: "description2",
        url: "url2",
      },
    ]

    return(
      <div>{links.map(link => <Link key={link.id} link={link} />)}</div>
    )
  }
}

export default LinkList