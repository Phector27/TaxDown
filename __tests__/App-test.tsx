import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import UserCard from '../src/components/common/UserCard/UserCard'

it('renders correctly', () => {
  renderer.create(
    <UserCard
      user={{
        Name: 'Test',
        Surname: 'With Jest',
        Age: 29
      }}
      index={1}
    />
  )
})
