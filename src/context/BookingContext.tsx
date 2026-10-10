import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingRequest } from '../types';

interface BookingContextType {
  bookings: BookingRequest[];
  createBooking: (data: Omit<BookingRequest, 'id' | 'referenceNumber' | 'createdAt' | 'status' | 'isDemo'>) => BookingRequest;
  cancelBooking: (id: string) => void;
  deleteBooking: (id: string) => void;
  selectedBookingTarget: { type: 'resort' | 'tour'; id: string } | null;
  setSelectedBookingTarget: (target: { type: 'resort' | 'tour'; id: string } | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingRequest[]>(() => {
    try {
      const saved = localStorage.getItem('nomad_bookings');
      if (saved) return JSON.parse(saved);
      // Sample preloaded demo booking
      return [
        {
          id: 'demo-b1',
          referenceNumber: 'NMD-78241',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          type: 'resort',
          itemId: 'resort-amirsoy-chalets',
          itemTitle: 'Amirsoy Alpine Wellness Chalets',
          itemImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
          checkIn: '2026-11-15',
          checkOut: '2026-11-18',
          nights: 3,
          guests: 2,
          roomTypeId: 'chalet-deluxe',
          roomTypeName: 'Панорамное Шале Deluxe',
          customerName: 'Александр Беляев',
          customerEmail: 'alex.belyaev@example.com',
          customerPhone: '+998 90 123 45 67',
          specialRequests: 'Трансфер из аэропорта Ташкента и подготовка камина к приезду',
          totalPrice: 1020,
          currency: 'USD',
          status: 'confirmed',
          isDemo: true
        }
      ];
    } catch {
      return [];
    }
  });

  const [selectedBookingTarget, setSelectedBookingTarget] = useState<{ type: 'resort' | 'tour'; id: string } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nomad_bookings', JSON.stringify(bookings));
    } catch {
      // Storage quota or unavailable
    }
  }, [bookings]);

  const createBooking = (data: Omit<BookingRequest, 'id' | 'referenceNumber' | 'createdAt' | 'status' | 'isDemo'>): BookingRequest => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newBooking: BookingRequest = {
      ...data,
      id: `booking-${Date.now()}`,
      referenceNumber: `NMD-${randomDigits}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      isDemo: true
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'cancelled' } : b));
  };

  const deleteBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        createBooking,
        cancelBooking,
        deleteBooking,
        selectedBookingTarget,
        setSelectedBookingTarget
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
