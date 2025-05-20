import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="max-w-md p-8 bg-[#121212] rounded-lg border border-gray-800 text-center">
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Ops! Algo deu errado</h2>
            <p className="text-gray-300 mb-6">
              Desculpe pelo inconveniente. Você pode tentar recarregar a página ou voltar para a página inicial.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.location.reload()}
                className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a]"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Recarregar
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="border-gray-700 text-[#D4AF37] hover:bg-gray-900"
              >
                <Home className="mr-2 h-4 w-4" />
                Página Inicial
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;