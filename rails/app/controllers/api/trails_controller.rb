class Api::TrailsController < ApplicationController

  def index
    @trails = Trail.all
      respond_to do |format|
        format.json { render json: @trails }
      end
  end

  def show
    @trail = Trail.find(params[:id])
      respond_to do |format|
        format.json  { render json: @trail }
      end
  end

  def create
    @trail = Trail.new(trail_params)
    if @trail.save
      respond_to do |format|
        format.json { render json: @trail, status: 201 }
      end
    else
      respond_to do |format|
        format.json { render json: @trail.errors, status: 422 }
      end
    end
  end

  def update
    @trail = Trail.find(params[:id])
    if @trail.update(trail_params)
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.json { render json: @trail.errors, status: 422 }
      end
    end
  end

  def destroy
    @trail = Trail.find(params[:id])
    @trail.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

private

  def trail_params
    params.require(:trail).permit(:name, :description, :location, :latitude, :longitude)
  end
end
