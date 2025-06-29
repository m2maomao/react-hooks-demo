const Toolbar = ({ onPlayMovie, onUploadImage }: {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  )
}

const Button = ({onClick, children}: {onClick: () => void; children: React.ReactNode}) => {
  return <button onClick={onClick}>{children}</button>
}

const App = () => {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing')}
      onUploadImage={() => alert('Uploading')}
    />
  )
}

export default App;