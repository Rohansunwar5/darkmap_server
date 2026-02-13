import axios from 'axios';
import { InternalServerError } from '../errors/internal-server.error';

class EcsService {
    private readonly BASE_URL = 'https://3n9j098tbf.execute-api.us-east-1.amazonaws.com/prod';

    async deleteInfrastructure() {
        const response = await axios.post(
            `${this.BASE_URL}/delete`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status !== 200) {
            throw new InternalServerError('Failed to delete ECS infrastructure');
        }

        return response.data;
    }

    async createInfrastructure() {
        const response = await axios.post(
            `${this.BASE_URL}/create`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status !== 200) {
            throw new InternalServerError('Failed to create ECS infrastructure');
        }

        return response.data;
    }

    async startServices() {
        const response = await axios.post(
            `${this.BASE_URL}/start-services`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status !== 200) {
            throw new InternalServerError('Failed to start ECS services');
        }

        return response.data;
    }
}

export default new EcsService();
