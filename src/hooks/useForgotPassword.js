import { useState } from 'react'
import ApiService from '../services/ApiService';

export const useForgotPassword = () => {

  const apiService = new ApiService(process.env.REACT_APP_API_BASE_URL);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const forgotPassword = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiService.forgotPassword(formData);
      setIsLoading(false);
      return response.message
    } catch (err) {    
      setError(err);
      setIsLoading(false);
      throw err; 
    }
  };

  return { forgotPassword, isLoading, error }
}