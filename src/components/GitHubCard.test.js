import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const pic = renderer
    .create(<GitHubCard />)
    .toJSON()
    expect(pic).toMatchSnapshot()
})