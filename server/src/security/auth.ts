import { Request, Response, NextFunction } from 'express';

const authenticateAPIKey = (req: Request, res: Response, next: NextFunction) => {

    const apiKey = req.headers['x-api-key'];

    if (apiKey && apiKey === process.env.API_KEY) {

        next()
        return

    }
  
    res.status(403).json({ message: 'Acesso negado: chave de API inválida' });

};

export { authenticateAPIKey };
