import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer fcSVVf_X2dG_MVdbdBFrwk73t2ibX43np8gOL4GFKqreqOjs6BatarI1eXHl-JOqMixt9sz1eqNXBo5iiGxni5Le7kl2IeWqjiha1LeCMUpDZulTjBapRvys-yOtZnYx',
  },
});
