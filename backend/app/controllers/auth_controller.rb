class AuthController < ApplicationController

    skip_before_action :authorized, only: [:create]
    
    def create
        
@Test User

 = User.find_by(email: user_login_params[:email])
        #User#authenticate comes from BCrypt
        if 
@Test User

 && @user.authenticate(user_login_params[:password])

            # encode token comes from ApplicationController
            token = encode_token({user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end

    private

    def user_login_params
        params.permit(:email, :password)
    end
end
