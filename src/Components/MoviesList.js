import '../index.css'

const MoviesList = ({ Poster, Title, Year }) => {
    return (
      <div>
        <div className="movieList">
            <img src={Poster} alt="" />

            <div className="bottom">
                <div className="disc">
                    <h3>
                        Name: <span>{Title}</span>
                    </h3>
                    <h3>
                        Year: <span>{Year}</span>
                    </h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MoviesList;