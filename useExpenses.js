import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const useExpenses = (filters = {}) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExpenses = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${API}/api/expenses`, {
        params: filters, headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses(data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching expenses');
    } finally { setLoading(false); }
  }, [JSON.stringify(filters)]);

  useEffect(() => { fetchExpenses(); }, [fetchExpenses]);
  return { expenses, loading, error, refetch: fetchExpenses };
};
