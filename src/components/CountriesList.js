import { Link } from 'react-router-dom';

function CountriesList() {
  let count = 0;
  return (
    <div>
      <Link class="btn btn-success mr-2" to="/country/BR">
        Brasil
      </Link>
      <Link class="btn btn-success mr-2" to="/country/FR">
        França
      </Link>
    </div>
  );
}

export default CountriesList;
