import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn } from "../../../src/store/auth";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() )


    test('debe de llamar la funcion checkingCredentials', async() => {

        await checkingAuthentication()( dispatch )
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )

    });


    test('startGoogleSignin debe de llamar checkingCredentials y login - Exito', async() => {

        const loginData = {ok: true, ...demoUser};
        await singInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
        expect(dispatch).toHaveBeenCalledWith( login( loginData ) );

    })


    test('startGoogleSignin debe de llamar checkingCredentials y login - Error', async() => {

        const loginData = {ok: false, errorMessage: 'Error en login de google'};
        await singInWithGoogle.mockResolvedValue( loginData );
        
        // thunk
        await startGoogleSignIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
        expect(dispatch).toHaveBeenCalledWith( logout( loginData.errorMessage ) );

    })

});