class RatingsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @ratings = @user.ratings.all
  end

  def show
    @user = User.find(params[:user_id])
    @rating = Rating.find(params[:id])
  end

  def create
    @user = User.find(params[:user_id])
    @rating = @user.ratings.new(rating_params)
    if @rating.save
      respond_to do |format|
        format.json { render json: @rating, status: 201 }
      end
    else
      respond_to do |format|
        format.json { render json: @rating.errors, status: 422 }
      end
    end
  end

  def update
    @rating = Rating.find(params[:id])
    if @rating.update(rating_params)
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.json { render json: @rating.errors, status: 422 }
      end
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

private
  def rating_params
    params.require(:rating).permit(:difficulty, :funness, :notes)
  end

end
