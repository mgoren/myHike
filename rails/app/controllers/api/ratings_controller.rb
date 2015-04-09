class Api::RatingsController < ApplicationController
  def index
    @trail = Trail.find(params[:trail_id])
    @ratings = @trail.ratings.all
    respond_to do |format|
      format.json { render json: @ratings }
    end
  end

  def show
    @trail = Trail.find(params[:trail_id])
    @rating = Rating.find(params[:id])
    respond_to do |format|
      format.json { render json: @rating }
    end
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.user = current_user # not working!
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
    params.require(:rating).permit(:difficulty, :funness, :notes, :trail_id)
  end

end
