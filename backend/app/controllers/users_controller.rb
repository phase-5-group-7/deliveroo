class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]  # This code ensures that users can create an account first before authentification

    def index   # This code was added to confirm that the user are in the db
        user = User.all 
        render json: user, status: :ok
    end

    def orders  # Only authenticated users can access their orders
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create 
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created 
        else 
            render json: { error: 'failed to create user' }, status: :unprocessable_entity
        end
    end


    private 

    def user_params
        params.permit(:username, :email, :password)
    end

end
