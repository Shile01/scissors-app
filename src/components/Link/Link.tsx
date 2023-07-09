import axios, { AxiosResponse } from 'axios';
import { useState, ChangeEvent } from 'react';

interface ShortenUrlResponse {
  link: string;
}

const Link: React.FC = () => {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<string>('');
  const [copyError, setCopyError] = useState<string>('');

  const handleShortenUrl = async () => {
    if (!longUrl) {
      setErrorMessage('Please add a link');
      return;
    }
    const accessToken = '4a192ab3c17a8b8a2467892dfd5d919cb77b421d';
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
      const response: AxiosResponse<ShortenUrlResponse> = await axios.post(
        apiUrl,
        {
          long_url: longUrl,
          domain: 'bit.ly',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { link } = response.data;
      setShortUrl(link);
      setErrorMessage('');
    } catch (error) {
      console.error('Error', error);
      setErrorMessage('Failed to shorten the URL');
    }
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopySuccess('Copied!');
      setTimeout(() => {
        setCopySuccess('');
      }, 2000);
      setCopyError('');
    } catch (error) {
      console.error('Error', error);
      setCopyError('Failed to copy');
      setTimeout(() => {
        setCopyError('');
      }, 2000);
      setCopySuccess('');
    }
  };

  console.log(shortUrl, 'shortUrl');
  return (
    <section className="bg-black/80 w-full py-10">
      <div className="rounded-xl w-fit md:w-[29.75rem] h-[26.1875rem] mx-0  md:mx-auto bg-white px-2 md:px-8 py-8">
        <input
          type="text"
          className="w-full md:w-[392px] h-[55px] rounded-lg p-4 text-primary placeholder:text-sm placeholder:text-primary  border-[1px] border-primary"
          placeholder="Paste Url here..."
          value={longUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLongUrl(e.target.value)
          }
        />
        <div className="mt-6 flex flex-col gap-y-4 md:flex-row gap-x-2">
          <input
            type="text"
            className="border-[1px] border-primary p-2  placeholder:text-primary placeholder:text-sm rounded-md w-full"
            placeholder="Choose Domain"
          />
          <input
            type="text"
            placeholder="Type Alias here"
            className="border-[1px] w-full border-primary p-2  placeholder:text-primary placeholder:text-sm rounded-md"
          />
        </div>
        <button
          className="bg-primary py-2 px-4 text-white w-full rounded-xl mt-6"
          onClick={handleShortenUrl}
        >
          Trim URL
        </button>
        {errorMessage && (
          <p className="text-red-500 mt-6 text-center">{errorMessage}</p>
        )}
        {shortUrl && (
          <div className="mt-6 border-[1px] border-primary rounded-xl p-3 text-primary flex items-center justify-between">
            <strong>Shortened URL: </strong>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button className="bg-primary py-1 px-2 text-white rounded-lg">
              <span onClick={handleCopy}>Copy</span>
            </button>
          </div>
        )}
        {copySuccess && (
          <p className="text-green-500 h-3 text-center">{copySuccess}</p>
        )}
        {copyError && <p className="text-red-500  text-center">{copyError}</p>}
        <p className="text-primary mt-7">
          By clicking TrimURL, I agree to the <strong>Terms of Service</strong>,{' '}
          <strong>Privacy Policy </strong>
          and Use of Cookies.
        </p>
      </div>
    </section>
  );
};

export default Link;
