import BaseAPI from './BaseAPI';

class GithubAPI extends BaseAPI {
  static fetchRepos() {
    return super.get('https://api.github.com/users/jrbartola/repos');
  }

  static fetchRepoLanguages({ repoName }) {
    return super.get(
      `https://api.github.com/repos/jrbartola/${repoName}/languages`
    );
  }
}

export default GithubAPI;
